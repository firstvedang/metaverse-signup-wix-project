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
