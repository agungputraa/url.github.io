
  
 

        // Clear the existing content of the body

        const urlParams = new URLSearchParams(window.location.search);

        const paramsToStore = {};

        // Store parameters in session storage excluding 'm=1'

        urlParams.forEach((value, key) => {

            if (key !== 'm' || value !== '1') {

                paramsToStore[key] = value;

            }

        });

        // Check if there are parameters to store

        if (Object.keys(paramsToStore).length > 0) {

          

            document.body.innerHTML = '';

            // Store parameters in session storage

            setSessionStorageParams(paramsToStore);

            // Create a div with Tailwind CSS styling and solid blue background

            const wrapperDiv = document.createElement('div');

            wrapperDiv.classList.add('w-full', 'h-screen', 'flex', 'items-center', 'justify-center', 'bg-blue-900'); // Add Tailwind CSS classes for styling

            // Create a button with double chevron icon

            const downloadButton = document.createElement('button');

            downloadButton.innerHTML = 'Tonton Video <i class="fas fa-angle-double-right"></i>';

            downloadButton.classList.add('bg-blue-800', 'text-white', 'border-none', 'px-6', 'py-3', 'text-center', 'text-lg', 'font-bold', 'rounded-full', 'shadow-lg'); // Increase padding and font size

             // Add event listener to fetch random post URL and redirect when the button is clicked

            downloadButton.addEventListener('click', function () {

                getRandomPostUrl(function (randomPostUrl) {

                    // Open random post URL in a new tab

                    const randomPostTab = window.open(randomPostUrl, '_blank');

                    // After 3 seconds, open a YouTube link in the same tab
setTimeout(function () {

                        window.location.href = 'https://majorcharacter.com/bE3QV/0.Pr3oprv/bYmhVeJvZfDO0J0POzD/QNzxO_DpM-3/LFT/Qh4TNoDxM_4lMSzMgT'; // Replace with your YouTube link

                    }, 3000);
                 

                });
              


            });

            // Append the button to the wrapper div

            wrapperDiv.appendChild(downloadButton);

            // Append the wrapper div to the body

            document.body.appendChild(wrapperDiv);

        }

    
  
    function getRandomPostUrl(callback) {
        const script = document.createElement('script');
        script.src = '/feeds/posts/default?orderby=published&alt=json-in-script&callback=handleFeedResponse&max-results=999';
        document.head.appendChild(script);

        window.handleFeedResponse = function (data) {
            const entries = data.feed.entry;
            const randomIndex = Math.floor(Math.random() * entries.length);
            const randomPostUrl = entries[randomIndex].link.filter(link => link.rel === 'alternate')[0].href;
            
            // Call the callback function with the random post URL
            callback(randomPostUrl);
            
            // Remove the dynamically added script element
            document.head.removeChild(script);
        };
    }

    function setSessionStorageParams(params) {
        for (const [key, value] of Object.entries(params)) {
            sessionStorage.setItem(key, value);
        }
    }


