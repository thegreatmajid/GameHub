const getCroppedImageUrl = (url: string) => {
  const targt = "media/";
  const index = url.indexOf(targt) + targt.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
