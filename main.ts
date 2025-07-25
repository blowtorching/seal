document.addEventListener('DOMContentLoaded', () => {
  const terminal = document.getElementById('terminal') as HTMLDivElement;
  const profileSection = document.getElementById('profile-section') as HTMLDivElement;
  const ipElement = document.getElementById('user-ip') as HTMLSpanElement;

  // Generate random IP address
  const randomIP = generateRandomIP();
  ipElement.textContent = randomIP;

  // Handle keypress event for "Enter"
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      switchToProfileView();
    }
  });

  // Generate a random IP address
  function generateRandomIP(): string {
    const segment1 = Math.floor(Math.random() * 255);
    const segment2 = Math.floor(Math.random() * 255);
    const segment3 = Math.floor(Math.random() * 255);
    const segment4 = Math.floor(Math.random() * 255);

    return `${segment1}.${segment2}.${segment3}.${segment4}`;
  }

  // Switch from terminal view to profile view
  function switchToProfileView(): void {
    if (terminal.style.display !== 'none') {
      // Animate terminal closing
      terminal.style.opacity = '0';
      setTimeout(() => {
        terminal.style.display = 'none';

        // Show profile section
        profileSection.style.display = 'block';
        profileSection.style.opacity = '0';

        setTimeout(() => {
          profileSection.style.opacity = '1';
        }, 100);
      }, 300);
    }
  }

  // Also allow clicking anywhere to continue
  document.addEventListener('click', () => {
    switchToProfileView();
  });
});
