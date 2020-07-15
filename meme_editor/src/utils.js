export const openUploadImage = (e, onComplete) => {
  const target = e.target || window.event.srcElement;
  const files = target.files;

  if (FileReader && files && files.length) {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      onComplete(fileReader);
    };
    fileReader.readAsDataURL(files[0]);
  }
};
