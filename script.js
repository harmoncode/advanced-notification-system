// DOM Elements
const notificationContainer = document.getElementById('notificationContainer');
const typeButtons = document.querySelectorAll('[data-type]');
const animationButtons = document.querySelectorAll('[data-animation]');
const positionButtons = document.querySelectorAll('[data-position]');
const soundEnabled = document.getElementById('soundEnabled');
const autoClose = document.getElementById('autoClose');
const duration = document.getElementById('duration');

// State
let currentAnimation = 'slide';
let currentPosition = 'top-right';
let notificationQueue = [];
let isProcessingQueue = false;

// Sound Effects
const sounds = {
    success: new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3'),
    error: new Audio('https://assets.mixkit.co/active_storage/sfx/270/270-preview.mp3'),
    warning: new Audio('https://assets.mixkit.co/active_storage/sfx/270/270-preview.mp3'),
    info: new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3'),
    custom: new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3')
};

// Notification Messages
const messages = {
    success: {
        title: 'Success!',
        message: 'Operation completed successfully.'
    },
    error: {
        title: 'Error!',
        message: 'Something went wrong. Please try again.'
    },
    warning: {
        title: 'Warning!',
        message: 'Please be careful with this action.'
    },
    info: {
        title: 'Information',
        message: 'Here\'s some important information for you.'
    },
    custom: {
        title: 'Special Offer!',
        message: 'Check out our latest features and updates.'
    }
};

// Initialize
function init() {
    addEventListeners();
    updateNotificationContainer();
}

// Add Event Listeners
function addEventListeners() {
    // Type buttons
    typeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            showNotification(type);
        });
    });

    // Animation buttons
    animationButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            animationButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentAnimation = btn.dataset.animation;
        });
    });

    // Position buttons
    positionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            positionButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentPosition = btn.dataset.position;
            updateNotificationContainer();
        });
    });
}

// Update Notification Container
function updateNotificationContainer() {
    notificationContainer.className = 'notification-container ' + currentPosition;
}

// Show Notification
function showNotification(type) {
    const notification = {
        type,
        animation: currentAnimation,
        position: currentPosition,
        message: messages[type]
    };

    notificationQueue.push(notification);
    processQueue();
}

// Process Queue
function processQueue() {
    if (isProcessingQueue || notificationQueue.length === 0) return;
    isProcessingQueue = true;

    const notification = notificationQueue.shift();
    createNotification(notification);
}

// Create Notification
function createNotification({ type, animation, position, message }) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type} ${animation}`;
    
    // Create notification content
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas ${getIcon(type)}"></i>
        </div>
        <div class="notification-content">
            <div class="notification-title">${message.title}</div>
            <div class="notification-message">${message.message}</div>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;

    // Add to container
    notificationContainer.appendChild(notification);

    // Play sound if enabled
    if (soundEnabled.checked) {
        sounds[type].play();
    }

    // Auto close if enabled
    if (autoClose.checked) {
        setTimeout(() => {
            removeNotification(notification);
        }, parseInt(duration.value));
    }

    // Add close button event listener
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        removeNotification(notification);
    });

    // Process next notification after animation
    setTimeout(() => {
        isProcessingQueue = false;
        processQueue();
    }, 300);
}

// Remove Notification
function removeNotification(notification) {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    
    setTimeout(() => {
        notification.remove();
    }, 300);
}

// Get Icon
function getIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-times-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle',
        custom: 'fa-star'
    };
    return icons[type];
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init); 