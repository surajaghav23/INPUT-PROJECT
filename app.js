var iOS = navigator.userAgent.platform && /iPad|iPhone|iPod/.test(navigator.userAgent.platform);
if (iOS)
    document.head.querySelector('meta[name="viewport"]').content = "width=device-width, initial-scale=1, maximum-scale=1";
else
    document.head.querySelector('meta[name="viewport"]').content = "width=device-width, initial-scale=1";