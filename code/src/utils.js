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

// for prevent pasting style
export const onPaste = (e) => {
  e.preventDefault();
  // get text representation of clipboard
  var text = (e.originalEvent || e).clipboardData.getData("text/plain");
  // insert text manually
  document.execCommand("insertHTML", false, text);
};

export const contentEditableProps = {
  contentEditable: "true",
  suppressContentEditableWarning: true,
  onPaste: onPaste,
};

export const getUrlWithoutParam = (pathname) => {
  return pathname.slice(0, pathname.lastIndexOf("/"));
};
