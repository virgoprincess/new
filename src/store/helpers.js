
export function mergeAttachments(threads){
  let newThreads = JSON.parse(JSON.stringify(threads));
  console.log("new Threads::",newThreads);
  newThreads.thread.sort((a,b) =>{
    return new Date(b.Date) - new Date(a.Date);
  })
 let attachmentLists = [];
  newThreads.thread.forEach(thread =>{
    thread.content.attachments.forEach(attachment =>{
      let fileSize = computeFileSize(attachment.size);
      attachment.size = fileSize.size + ' ' + fileSize.ext;
      attachmentLists.push(attachment);
    })
  })
  console.log("attachmentLists::",attachmentLists)
  return attachmentLists;
}
export function computeFileSize(size){
  let computedSize = size/1024/1024;
  let ext = 'MB';

  if(computedSize > 1000){
    computedSize /= 1000;
    if(computedSize < 1000)
      ext = 'GB';
    else{
      computedSize /= 1000;
    }
  }else if( computedSize < 1 )
    ext = 'KB'

  computedSize = convertNumberWithComma(computedSize);
  return {"size":computedSize,"ext":ext};
}

export function convertNumberWithComma(value){
  return value.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}