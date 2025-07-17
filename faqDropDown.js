// 📁 faqDropdown.js

$w.onReady(function () {
  $w("#faqRepeater").onItemReady(($item, itemData, index) => {
    const toggleButton = $item("#faqQuestion");
    const answerBox = $item("#faqAnswer");

    // Optional: persist dropdown state in session
    let sessionKey = `faqItem-${index}`;
    let opened = session.getItem(sessionKey) === 'true';
    answerBox.collapsed = !opened;

    toggleButton.onClick(() => {
      answerBox.collapsed = !answerBox.collapsed;
      session.setItem(sessionKey, (!answerBox.collapsed).toString());
    });
  });
});