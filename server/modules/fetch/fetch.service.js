export default {
  getOriginalUrl(imgInfo){
    if (imgInfo && imgInfo.illust && imgInfo.illust.metaSinglePage && imgInfo.illust.metaSinglePage.originalImageUrl) {
      return imgInfo.illust.metaSinglePage.originalImageUrl
    }
    if (imgInfo && imgInfo.illust && imgInfo.illust.imageUrls) {
      return imgInfo.illust.imageUrls.large || imgInfo.illust.imageUrls.medium || imgInfo.illust.imageUrls.squareMedium
    }
  }
}
