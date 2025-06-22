(function() {
  // Read config from global object
  const config = window.ChatWidgetConfig || {};
  const iframeUrl = config.iframeUrl || 'https://example.com';
  const widgetColor = config.widgetColor || '#007bff';
  const popupWidth = config.popupWidth || 400;
  const popupHeight = config.popupHeight || 600;
  const positionBottom = config.positionBottom || 20;
  const positionRight = config.positionRight || 20;

  // Create styles
  const style = document.createElement('style');
  style.innerHTML = `
    .cw-widget-container {
      position: fixed;
      bottom: ${positionBottom}px;
      right: ${positionRight}px;
      z-index: 9999;
      font-family: Arial, sans-serif;
    }
    .cw-button {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: ${widgetColor};
      color: white;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      font-size: 30px;
    }
    .cw-popup {
      display: none;
      position: fixed;
      bottom: ${positionBottom + 70}px;
      right: ${positionRight}px;
      width: ${popupWidth}px;
      height: ${popupHeight}px;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.3);
      background-color: white;
      overflow: hidden;
      z-index: 10000;
    }
    .cw-popup-header {
      background-color: ${widgetColor};
      color: white;
      padding: 10px;
      text-align: right;
      font-weight: bold;
      cursor: pointer;
    }
    .cw-popup iframe {
      width: 100%;
      height: calc(100% - 40px);
      border: none;
    }
  `;
  document.head.appendChild(style);

  // Create widget container
  const container = document.createElement('div');
  container.className = 'cw-widget-container';

  // Create chat button
  const button = document.createElement('button');
  button.className = 'cw-button';
  button.innerHTML = '&#128172;'; // Chat bubble emoji
  container.appendChild(button);

  // Create popup
  const popup = document.createElement('div');
  popup.className = 'cw-popup';

  // Create popup header
  const header = document.createElement('div');
  header.className = 'cw-popup-header';
  header.innerText = '×'; // Close button
  popup.appendChild(header);

  // Create iframe
  const iframe = document.createElement('iframe');
  iframe.src = iframeUrl;
  popup.appendChild(iframe);

  // Append to body
  document.body.appendChild(container);
  document.body.appendChild(popup);

  // Event listeners
  button.addEventListener('click', () => {
    popup.style.display = 'block';
  });

  header.addEventListener('click', () => {
    popup.style.display = 'none';
  });

})();
