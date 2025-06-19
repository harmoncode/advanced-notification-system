# Advanced Notification System

A comprehensive notification system with multiple types and auto-dismiss functionality. Perfect for modern web applications that need to display various types of notifications to users.

## ✨ Features

- **Multiple Types**: Success, Error, Warning, Info, and Custom notifications
- **Auto Dismiss**: Automatic removal with customizable timing
- **Manual Control**: Manual dismiss with close button
- **Stacking**: Multiple notifications stack beautifully
- **Responsive**: Works perfectly on all devices
- **Customizable**: Easy to customize colors, positions, and animations
- **Accessible**: Built with ARIA labels and keyboard navigation

## 🚀 Live Demo

[View on CodePen](https://codepen.io/harmoncode/pen/YPXzbRK)

## 📁 Files

- `index.html` - Main HTML structure
- `style.css` - All styling and animations
- `script.js` - JavaScript functionality

## 🛠️ Usage

### Basic Implementation

```javascript
// Show different types of notifications
showNotification('Success!', 'success');
showNotification('Error occurred!', 'error');
showNotification('Warning message!', 'warning');
showNotification('Info message!', 'info');
```

### Advanced Usage

```javascript
// Custom notification with options
showNotification('Custom message', 'custom', {
    duration: 5000,
    position: 'top-right',
    autoDismiss: true
});
```

## 🎨 Notification Types

- **Success**: Green notification for successful actions
- **Error**: Red notification for errors and failures
- **Warning**: Yellow notification for warnings
- **Info**: Blue notification for informational messages
- **Custom**: Customizable notification with your own styling

## ⚙️ Configuration Options

```javascript
const config = {
    duration: 3000,        // Auto dismiss time (ms)
    position: 'top-right', // Position on screen
    autoDismiss: true,     // Enable/disable auto dismiss
    maxNotifications: 5,   // Maximum notifications at once
    animation: 'slide'     // Animation type
};
```

## 📱 Browser Support

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- IE11+ ✅

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Created by

**HarmonCode** - [harmoncode.com](https://harmoncode.com)

---

⭐ If you find this useful, please give it a star! 