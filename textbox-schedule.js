const editor = document.querySelector('[contenteditable="true"][role="textbox"]');

if (!editor) {
  console.error("❌ ما لقيت بوكس الكتابة");
} else {
  editor.focus();

  const text = `تدور على سيرفر ديسكورد فعّال؟
مكان يجمع ألعاب، فعاليات، ونقاشات ممتعة مع ناس بنفس اهتماماتك؟
 مساحة محترمة، تفاعل يومي، وإدارة تهتم بالجميع.
إذا كنت تحب المجتمعات النشطة وتبي سيرفر ديسكورد تعيش فيه مو بس تدخل وتطلع، هذا مكانك 👋

http://dsc.gg/llNll

#بلاك_اوبس_7 #كود`;

  const pasteEvent = new ClipboardEvent("paste", {
    bubbles: true,
    cancelable: true,
    clipboardData: new DataTransfer()
  });

  pasteEvent.clipboardData.setData("text/plain", text);
  editor.dispatchEvent(pasteEvent);
}
