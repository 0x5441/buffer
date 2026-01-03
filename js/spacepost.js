const editor = document.querySelector('[data-testid="tweetTextarea_0"][contenteditable="true"]');

if (!editor) {
  console.error("❌ ما لقيت بوكس الكتابة");
} else {
  editor.focus();

  const text =
`#مساحه
#سبيس


1`;

  const pasteEvent = new ClipboardEvent("paste", {
    bubbles: true,
    cancelable: true,
    clipboardData: new DataTransfer()
  });

  pasteEvent.clipboardData.setData("text/plain", text);
  editor.dispatchEvent(pasteEvent);
}
