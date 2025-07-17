// 📁 faqSearch.js

$w.onReady(function () {
  $w('#faqSearchInput').onInput(() => {
    const searchTerm = $w('#faqSearchInput').value.toLowerCase();
    
    $w('#faqRepeater').data = originalFAQData.filter(item =>
      item.question.toLowerCase().includes(searchTerm) ||
      item.answer.toLowerCase().includes(searchTerm)
    );
  });
});

// originalFAQData should be declared and assigned your full FAQ data on page load


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
