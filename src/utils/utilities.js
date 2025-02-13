export const extractUrlAndId = (cloudinaryURL) => {
    const lastSlashIndex = cloudinaryURL.lastIndexOf('/')
    const url = cloudinaryURL.substring(0, lastSlashIndex)
    const id = cloudinaryURL.substring(lastSlashIndex + 1)
    return { url, id }
}