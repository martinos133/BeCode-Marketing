#!/bin/bash
# Optimize videos for web: H.264, max 1080p, CRF 28
# Reduces file size while maintaining good quality for web playback

cd "$(dirname "$0")/.."
PUBLIC_DIR="public"
TEMP_SUFFIX=".optimized.mp4"

# Process each video
process_video() {
  local file="$1"
  [[ "$file" == *"$TEMP_SUFFIX"* ]] && return
  
  local size_before
  size_before=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
  
  echo "Optimizing: $file ($(ls -lh "$file" | awk '{print $5}'))"
  
  if ffmpeg -y -i "$file" \
    -c:v libx264 \
    -crf 28 \
    -preset medium \
    -vf "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease" \
    -c:a aac \
    -b:a 128k \
    -movflags +faststart \
    "${file}${TEMP_SUFFIX}" 2>/dev/null; then
    :
  else
    ffmpeg -y -i "$file" \
      -c:v libx264 \
      -crf 28 \
      -preset medium \
      -vf "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease" \
      -an \
      -movflags +faststart \
      "${file}${TEMP_SUFFIX}" 2>/dev/null || { echo "  -> Skipped (ffmpeg failed)"; rm -f "${file}${TEMP_SUFFIX}"; return; }
  fi
  
  [ -f "${file}${TEMP_SUFFIX}" ] || return
  local size_after
  size_after=$(stat -f%z "${file}${TEMP_SUFFIX}" 2>/dev/null || stat -c%s "${file}${TEMP_SUFFIX}" 2>/dev/null)
  
  if [ "$size_after" -lt "$size_before" ]; then
    mv "${file}${TEMP_SUFFIX}" "$file"
    echo "  -> Reduced to $(ls -lh "$file" | awk '{print $5}')"
  else
    rm -f "${file}${TEMP_SUFFIX}"
    echo "  -> Kept original (optimized was larger)"
  fi
}

export TEMP_SUFFIX
export -f process_video 2>/dev/null || true

find "$PUBLIC_DIR" -type f -name "*.mp4" -print0 | xargs -0 -I {} bash -c 'process_video "$@"' _ {}

echo "Done."
