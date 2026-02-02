import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  // We attach it to window so the button can find it
  window.toggleDyslexia = function() {
    const html = document.documentElement;
    const currentState = html.getAttribute('data-dyslexia-mode') === 'true';
    const newState = !currentState;
    
    html.setAttribute('data-dyslexia-mode', newState);
    
    // Save the choice so it stays ON when they change pages!
    localStorage.setItem('dyslexia-mode', newState);
    
    console.log('Dyslexia mode is now:', newState);
  };

  // This part makes sure it STAYS on if the student refreshes the page
  const savedMode = localStorage.getItem('dyslexia-mode');
  if (savedMode === 'true') {
    document.documentElement.setAttribute('data-dyslexia-mode', 'true');
  }
}