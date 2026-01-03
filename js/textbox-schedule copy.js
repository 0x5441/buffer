const editor = document.querySelector('[contenteditable="true"][role="textbox"]');
editor.focus();

const randomNumber = Math.floor(10000 + Math.random() * 90000);

const text = `سيرفر دسكورد Outlaws 
حياكم الله سيرفر قيمنق يشمل العاب كثيره ❤️

http://discord.gg/JE3nyAXzg

 #بلاك_اوبس7  #ديسكورد
 #دسكورد  #دبد #سوالف #كود #فورتنايت
${randomNumber}`;

const pasteEvent = new ClipboardEvent("paste", {
  bubbles: true,
  cancelable: true,
  clipboardData: new DataTransfer()
});

pasteEvent.clipboardData.setData("text/plain", text);
editor.dispatchEvent(pasteEvent);
