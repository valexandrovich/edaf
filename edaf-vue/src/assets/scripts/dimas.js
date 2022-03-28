export default function() {
  const selectors = {
    tabs: '[role="tab"]',
    tabsContainer: '[data-tabs]',
    tabContent: '[role="tabpanel"]',
    videoElement: '[data-video-url]'
  }
  
  /* ===============TABS===============
  * - Tab container must have attribute: data-tabs
  * =====================================
  * - Each TAB BUTTON must have attrs:
  * - - role=tab - ACCESSIBILITY
  * - - aria-selected=true/false - TRUE IF TAB IS ACTIVE
  * - - aria-controls= EQUAL TO TAB CONTENT CONTAINER ID
  * - - id= EQUAL TO ARIA-LABELLEDBY ATTR FROM TAB CONTENT (Accessibility things)
  * - - tabindex= 0/-1 - WHEN ACTIVE = 0
  * =====================================
  * - Each TAB CONTENT CONTAINER must have attrs:
  * - - role=tabpanel - ACCESSIBILITY
  * - - id= EQUAL TO ARIA-CONTROLS OF TAB BUTTON
  * - - tabindex= 0/-1 - WHEN ACTIVE = 0
  * - - aria-labelledby= EQUAL TO ID OF TAB BUTTON
  * */
  document.querySelectorAll(selectors.tabs)
      .forEach(tab => tab.addEventListener('click', onTabClick));
  
  function onTabClick(e) {
    const target = e.target,
          container = target.closest(selectors.tabsContainer),
          tabContentTarget = container?.querySelector(`#${target.getAttribute('aria-controls')}`);
    
    container?.querySelectorAll('[aria-selected="true"]')
        .forEach(btn => btn.setAttribute('aria-selected', 'false'));
    
    target.setAttribute('aria-selected', 'true');
    
    if(container?.querySelectorAll(selectors.tabContent).length > 0) {
      container.querySelectorAll(selectors.tabContent)
          .forEach(tabContent => tabContent.setAttribute('hidden', 'true'))
    }
    
    if(tabContentTarget) {
      tabContentTarget
          .removeAttribute('hidden');
      
      //Play video if is there
      pauseAllVideos();
      if(tabContentTarget) {
        const iframeId = tabContentTarget.querySelector('iframe')?.getAttribute('id');
        
        if(iframeId) {
          players.forEach(player => {
            if(player.h.getAttribute('id') === iframeId) {
              player.playVideo();
            }
          })
        }
      }
    }
  }
  /* ====== END TABS ====== */
  
  /* =============== VIDEOS ===============
  * Video container must have the 2x attrs
  * -- data-video-url - Youtube video URL
  * -- data-video-config - config for player in JSON
  * Script create a new CHILD element inside data-video-url container
  * and rebuild it to the youtube iframe
  * */
  
  let players = []; //All player objects
  const $videoElements = document.querySelectorAll(selectors.videoElement);

  //Init YouTube embed API
  function createVideoScript() {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
  
    const firstPageScript = document.querySelector('script');
    firstPageScript.parentNode.insertBefore(script, firstPageScript);
  }
  
  function onPlayerReady(e) {
    const target = e.target;
    
    //Play only visible videos and pause all display:none
    if(target.h.offsetWidth === 0 && target.h.offsetHeight === 0) {
      target.stopVideo();
    }
  }

  function onYouTubeIframeAPIReady(video) {
    if(!window.YT || !window.YT.loaded) {
      //Recursive
      setTimeout(() => onYouTubeIframeAPIReady(video), 500);
      return;
    }
    
    const videoURL = video.getAttribute('data-video-url');
    const videoConfig = (video.getAttribute('data-video-config'))
        ? JSON.parse(video.getAttribute('data-video-config'))
        : null;
    const videoID = videoURL.split('watch?v=')[1];
    
    //Create new DIV inside current div [for iframe inside current element]
    const iframeContainer = document.createElement('div');
    video.append(iframeContainer);
    
    players.push(new YT.Player(iframeContainer, {
      height: '100%',
      width: '100%',
      videoId: videoID,
      playerVars: {
        autoplay: (videoConfig?.autoplay) ? videoConfig.autoplay : 1,
        playsinline: (videoConfig?.autoplay) ? videoConfig.autoplay : 1,
        mute: (videoConfig?.mute) ? videoConfig.mute : 1,
        loop: (videoConfig?.loop) ? videoConfig.loop : 1,
        controls: (videoConfig?.controls) ? videoConfig.controls : 1,
        enablejsapi: 1,
        origin: location.origin,
        rel: 0,
        showinfo: 0
      },
      events: {
        'onReady': onPlayerReady
      }
    }));
  }
  
  if($videoElements.length > 0) {
    //Init YouTube API if page has video attr
    createVideoScript();

    $videoElements.forEach($vid => {
      onYouTubeIframeAPIReady($vid);
    })
  }
  
  function pauseAllVideos() {
    players.forEach(player => {
      player.pauseVideo();
    });
  }
  
  /* =============== END VIDEOS =============== */
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkaW1hcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgY29uc3Qgc2VsZWN0b3JzID0ge1xuICAgIHRhYnM6ICdbcm9sZT1cInRhYlwiXScsXG4gICAgdGFic0NvbnRhaW5lcjogJ1tkYXRhLXRhYnNdJyxcbiAgICB0YWJDb250ZW50OiAnW3JvbGU9XCJ0YWJwYW5lbFwiXScsXG4gICAgdmlkZW9FbGVtZW50OiAnW2RhdGEtdmlkZW8tdXJsXSdcbiAgfVxuICBcbiAgLyogPT09PT09PT09PT09PT09VEFCUz09PT09PT09PT09PT09PVxuICAqIC0gVGFiIGNvbnRhaW5lciBtdXN0IGhhdmUgYXR0cmlidXRlOiBkYXRhLXRhYnNcbiAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICogLSBFYWNoIFRBQiBCVVRUT04gbXVzdCBoYXZlIGF0dHJzOlxuICAqIC0gLSByb2xlPXRhYiAtIEFDQ0VTU0lCSUxJVFlcbiAgKiAtIC0gYXJpYS1zZWxlY3RlZD10cnVlL2ZhbHNlIC0gVFJVRSBJRiBUQUIgSVMgQUNUSVZFXG4gICogLSAtIGFyaWEtY29udHJvbHM9IEVRVUFMIFRPIFRBQiBDT05URU5UIENPTlRBSU5FUiBJRFxuICAqIC0gLSBpZD0gRVFVQUwgVE8gQVJJQS1MQUJFTExFREJZIEFUVFIgRlJPTSBUQUIgQ09OVEVOVCAoQWNjZXNzaWJpbGl0eSB0aGluZ3MpXG4gICogLSAtIHRhYmluZGV4PSAwLy0xIC0gV0hFTiBBQ1RJVkUgPSAwXG4gICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAqIC0gRWFjaCBUQUIgQ09OVEVOVCBDT05UQUlORVIgbXVzdCBoYXZlIGF0dHJzOlxuICAqIC0gLSByb2xlPXRhYnBhbmVsIC0gQUNDRVNTSUJJTElUWVxuICAqIC0gLSBpZD0gRVFVQUwgVE8gQVJJQS1DT05UUk9MUyBPRiBUQUIgQlVUVE9OXG4gICogLSAtIHRhYmluZGV4PSAwLy0xIC0gV0hFTiBBQ1RJVkUgPSAwXG4gICogLSAtIGFyaWEtbGFiZWxsZWRieT0gRVFVQUwgVE8gSUQgT0YgVEFCIEJVVFRPTlxuICAqICovXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzLnRhYnMpXG4gICAgICAuZm9yRWFjaCh0YWIgPT4gdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25UYWJDbGljaykpO1xuICBcbiAgZnVuY3Rpb24gb25UYWJDbGljayhlKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQsXG4gICAgICAgICAgY29udGFpbmVyID0gdGFyZ2V0LmNsb3Nlc3Qoc2VsZWN0b3JzLnRhYnNDb250YWluZXIpLFxuICAgICAgICAgIHRhYkNvbnRlbnRUYXJnZXQgPSBjb250YWluZXI/LnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKX1gKTtcbiAgICBcbiAgICBjb250YWluZXI/LnF1ZXJ5U2VsZWN0b3JBbGwoJ1thcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXScpXG4gICAgICAgIC5mb3JFYWNoKGJ0biA9PiBidG4uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJykpO1xuICAgIFxuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgIFxuICAgIGlmKGNvbnRhaW5lcj8ucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcnMudGFiQ29udGVudCkubGVuZ3RoID4gMCkge1xuICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzLnRhYkNvbnRlbnQpXG4gICAgICAgICAgLmZvckVhY2godGFiQ29udGVudCA9PiB0YWJDb250ZW50LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJ3RydWUnKSlcbiAgICB9XG4gICAgXG4gICAgaWYodGFiQ29udGVudFRhcmdldCkge1xuICAgICAgdGFiQ29udGVudFRhcmdldFxuICAgICAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgXG4gICAgICAvL1BsYXkgdmlkZW8gaWYgaXMgdGhlcmVcbiAgICAgIHBhdXNlQWxsVmlkZW9zKCk7XG4gICAgICBpZih0YWJDb250ZW50VGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IGlmcmFtZUlkID0gdGFiQ29udGVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKT8uZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBcbiAgICAgICAgaWYoaWZyYW1lSWQpIHtcbiAgICAgICAgICBwbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcbiAgICAgICAgICAgIGlmKHBsYXllci5oLmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gaWZyYW1lSWQpIHtcbiAgICAgICAgICAgICAgcGxheWVyLnBsYXlWaWRlbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyogPT09PT09IEVORCBUQUJTID09PT09PSAqL1xuICBcbiAgLyogPT09PT09PT09PT09PT09IFZJREVPUyA9PT09PT09PT09PT09PT1cbiAgKiBWaWRlbyBjb250YWluZXIgbXVzdCBoYXZlIHRoZSAyeCBhdHRyc1xuICAqIC0tIGRhdGEtdmlkZW8tdXJsIC0gWW91dHViZSB2aWRlbyBVUkxcbiAgKiAtLSBkYXRhLXZpZGVvLWNvbmZpZyAtIGNvbmZpZyBmb3IgcGxheWVyIGluIEpTT05cbiAgKiBTY3JpcHQgY3JlYXRlIGEgbmV3IENISUxEIGVsZW1lbnQgaW5zaWRlIGRhdGEtdmlkZW8tdXJsIGNvbnRhaW5lclxuICAqIGFuZCByZWJ1aWxkIGl0IHRvIHRoZSB5b3V0dWJlIGlmcmFtZVxuICAqICovXG4gIFxuICBsZXQgcGxheWVycyA9IFtdOyAvL0FsbCBwbGF5ZXIgb2JqZWN0c1xuICBjb25zdCAkdmlkZW9FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzLnZpZGVvRWxlbWVudCk7XG5cbiAgLy9Jbml0IFlvdVR1YmUgZW1iZWQgQVBJXG4gIGZ1bmN0aW9uIGNyZWF0ZVZpZGVvU2NyaXB0KCkge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaSc7XG4gIFxuICAgIGNvbnN0IGZpcnN0UGFnZVNjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdCcpO1xuICAgIGZpcnN0UGFnZVNjcmlwdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzY3JpcHQsIGZpcnN0UGFnZVNjcmlwdCk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIG9uUGxheWVyUmVhZHkoZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIFxuICAgIC8vUGxheSBvbmx5IHZpc2libGUgdmlkZW9zIGFuZCBwYXVzZSBhbGwgZGlzcGxheTpub25lXG4gICAgaWYodGFyZ2V0Lmgub2Zmc2V0V2lkdGggPT09IDAgJiYgdGFyZ2V0Lmgub2Zmc2V0SGVpZ2h0ID09PSAwKSB7XG4gICAgICB0YXJnZXQuc3RvcFZpZGVvKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkodmlkZW8pIHtcbiAgICBpZighd2luZG93LllUIHx8ICF3aW5kb3cuWVQubG9hZGVkKSB7XG4gICAgICAvL1JlY3Vyc2l2ZVxuICAgICAgc2V0VGltZW91dCgoKSA9PiBvbllvdVR1YmVJZnJhbWVBUElSZWFkeSh2aWRlbyksIDUwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHZpZGVvVVJMID0gdmlkZW8uZ2V0QXR0cmlidXRlKCdkYXRhLXZpZGVvLXVybCcpO1xuICAgIGNvbnN0IHZpZGVvQ29uZmlnID0gKHZpZGVvLmdldEF0dHJpYnV0ZSgnZGF0YS12aWRlby1jb25maWcnKSlcbiAgICAgICAgPyBKU09OLnBhcnNlKHZpZGVvLmdldEF0dHJpYnV0ZSgnZGF0YS12aWRlby1jb25maWcnKSlcbiAgICAgICAgOiBudWxsO1xuICAgIGNvbnN0IHZpZGVvSUQgPSB2aWRlb1VSTC5zcGxpdCgnd2F0Y2g/dj0nKVsxXTtcbiAgICBcbiAgICAvL0NyZWF0ZSBuZXcgRElWIGluc2lkZSBjdXJyZW50IGRpdiBbZm9yIGlmcmFtZSBpbnNpZGUgY3VycmVudCBlbGVtZW50XVxuICAgIGNvbnN0IGlmcmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZpZGVvLmFwcGVuZChpZnJhbWVDb250YWluZXIpO1xuICAgIFxuICAgIHBsYXllcnMucHVzaChuZXcgWVQuUGxheWVyKGlmcmFtZUNvbnRhaW5lciwge1xuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgdmlkZW9JZDogdmlkZW9JRCxcbiAgICAgIHBsYXllclZhcnM6IHtcbiAgICAgICAgYXV0b3BsYXk6ICh2aWRlb0NvbmZpZz8uYXV0b3BsYXkpID8gdmlkZW9Db25maWcuYXV0b3BsYXkgOiAxLFxuICAgICAgICBwbGF5c2lubGluZTogKHZpZGVvQ29uZmlnPy5hdXRvcGxheSkgPyB2aWRlb0NvbmZpZy5hdXRvcGxheSA6IDEsXG4gICAgICAgIG11dGU6ICh2aWRlb0NvbmZpZz8ubXV0ZSkgPyB2aWRlb0NvbmZpZy5tdXRlIDogMSxcbiAgICAgICAgbG9vcDogKHZpZGVvQ29uZmlnPy5sb29wKSA/IHZpZGVvQ29uZmlnLmxvb3AgOiAxLFxuICAgICAgICBjb250cm9sczogKHZpZGVvQ29uZmlnPy5jb250cm9scykgPyB2aWRlb0NvbmZpZy5jb250cm9scyA6IDEsXG4gICAgICAgIGVuYWJsZWpzYXBpOiAxLFxuICAgICAgICBvcmlnaW46IGxvY2F0aW9uLm9yaWdpbixcbiAgICAgICAgcmVsOiAwLFxuICAgICAgICBzaG93aW5mbzogMFxuICAgICAgfSxcbiAgICAgIGV2ZW50czoge1xuICAgICAgICAnb25SZWFkeSc6IG9uUGxheWVyUmVhZHlcbiAgICAgIH1cbiAgICB9KSk7XG4gIH1cbiAgXG4gIGlmKCR2aWRlb0VsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAvL0luaXQgWW91VHViZSBBUEkgaWYgcGFnZSBoYXMgdmlkZW8gYXR0clxuICAgIGNyZWF0ZVZpZGVvU2NyaXB0KCk7XG5cbiAgICAkdmlkZW9FbGVtZW50cy5mb3JFYWNoKCR2aWQgPT4ge1xuICAgICAgb25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkoJHZpZCk7XG4gICAgfSlcbiAgfVxuICBcbiAgZnVuY3Rpb24gcGF1c2VBbGxWaWRlb3MoKSB7XG4gICAgcGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XG4gICAgICBwbGF5ZXIucGF1c2VWaWRlbygpO1xuICAgIH0pO1xuICB9XG4gIFxuICAvKiA9PT09PT09PT09PT09PT0gRU5EIFZJREVPUyA9PT09PT09PT09PT09PT0gKi9cbn07Il0sImZpbGUiOiJkaW1hcy5qcyJ9
