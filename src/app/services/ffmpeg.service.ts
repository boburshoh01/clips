import { Injectable } from '@angular/core';
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class FfmpegService {
  isReady = false
  private ffmpeg

  constructor() {
    this.ffmpeg = new FFmpeg()
  }

  async init() {
    if (this.isReady) {
      return
    }

    await this.ffmpeg.load()

    this.isReady = true
  }
}
