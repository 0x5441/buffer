const editor = document.querySelector('[contenteditable="true"][role="textbox"]');

if (!editor) {
  console.error("❌ ما لقيت بوكس الكتابة");
} else {
  editor.focus();

  const text = "test";

  // إنشاء حدث paste
  const pasteEvent = new ClipboardEvent("paste", {
    bubbles: true,
    cancelable: true,
    clipboardData: new DataTransfer()
  });

  pasteEvent.clipboardData.setData("text/plain", text);

  editor.dispatchEvent(pasteEvent);
}
