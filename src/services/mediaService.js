import { httpService } from "./http.service"

const ENDPOINT = 'media'

export const mediaService = {
    getMediaFromUrl,
}


async function getMediaFromUrl(videoId, fileFormat) {
    try {
        return await httpService.get(`${ENDPOINT}/${fileFormat}/${videoId}`)
    } catch (err) {
        console.error('Error downloading audio:', err);
    }

}