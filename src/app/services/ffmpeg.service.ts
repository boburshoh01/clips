import { Injectable } from '@angular/core';
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile } from '@ffmpeg/util';

@Injectable({
  providedIn: 'root'
})
export class FfmpegService {
  isReady = false
  private ffmpeg

  constructor() {
    this.ffmpeg = new FFmpeg({ log: true })
  }

  async init() {
    if (this.isReady) {
      return
    }

    await this.ffmpeg.load()
    this.isReady = true
  }

  async getScreenshots(file: File) {
    const data = await fetchFile(file)

    this.ffmpeg.writeFile(file.name, data)
  }
}
