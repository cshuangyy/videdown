export interface VideoFormat {
  formatId: string
  quality: string
  ext: string
  filesize?: number
  width?: number
  height?: number
  fps?: number
  hasAudio?: boolean
  url?: string  // 直接下载链接（用于抖音等平台）
}

export interface AudioTrack {
  id: string
  name: string
  language: string
  formatId: string
  isM3u8?: boolean
}

export interface SubtitleInfo {
  language: string
  name: string
  url: string
}

export interface AudioFormat {
  formatId: string
  quality: string
  ext: string
  filesize?: number
  abr?: number
  acodec?: string
}

export interface VideoInfo {
  id: string
  title: string
  description?: string
  thumbnail: string
  duration?: number
  uploader?: string
  webpageUrl: string
  formats: VideoFormat[]
  audioTracks?: AudioTrack[]
  subtitles?: SubtitleInfo[]
  audioFormats?: AudioFormat[]
  isYoutube?: boolean
}

export interface DownloadTask {
  id: string
  url: string
  videoInfo: VideoInfo
  selectedFormat: VideoFormat
  outputDir: string
  status: 'pending' | 'downloading' | 'paused' | 'merging' | 'completed' | 'error'
  progress: number
  downloadedSize?: string
  totalSize?: string
  speed?: string
  eta?: string
  error?: string
  filePath?: string
  statusMessage?: string
  createdAt: string
}

export interface HistoryRecord {
  id: string
  title: string
  thumbnail: string
  url: string
  filePath: string
  format: string
  quality: string
  fileSize?: string
  createdAt: string
}

export type TabType = 'download' | 'history' | 'about' | 'settings'
