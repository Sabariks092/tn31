 const packages = [
    {
        id: 1,
        title: "TEMPLE TRAIL TAMIL NADU",
        tag: "Spiritual Journey",
        destination: "Madurai, Rameshwaram, Kanyakumari",
        duration: "5 Days / 4 Nights",
        accommodation: "3-star hotels",
        meals: "All meals included",
        price: "RS. 12,999 ONLY",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
        subtitle: "Explore the spiritual heart of Tamil Nadu",
        highlights: [
            { label: "Duration", value: "5D/4N" },
            { label: "Temples", value: "10+ Sacred Sites" },
            { label: "Meals", value: "All Included" },
            { label: "Transport", value: "AC Vehicle" }
        ],
        inclusions: [
            "4 nights accommodation in comfortable hotels",
            "Daily breakfast, lunch, and dinner",
            "AC vehicle for all transfers and sightseeing",
            "Professional tour guide",
            "Entry fees to all temples and monuments",
            "Kanyakumari sunrise viewing"
        ],
        itinerary: "Day 1: Arrival in Madurai, visit Meenakshi Temple. Day 2: Madurai local sightseeing including Thirumalai Nayakkar Palace. Day 3: Drive to Rameshwaram, visit Ramanathaswamy Temple. Day 4: Rameshwaram to Kanyakumari, visit Vivekananda Rock Memorial. Day 5: Sunrise at Kanyakumari, departure.",
        bestTime: "October to March is the ideal time to visit Tamil Nadu temples. The weather is pleasant and comfortable for sightseeing. Avoid summer months (April-June) due to extreme heat."
    },
    {
        id: 2,
        title: "HILL STATION RETREAT",
        tag: "Nature Escape",
        destination: "Ooty, Coonoor, Kotagiri",
        duration: "4 Days / 3 Nights",
        accommodation: "Premium resorts",
        meals: "Breakfast included",
        price: "RS. 15,999 ONLY",
        image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80",
        subtitle: "Experience the Queen of Hill Stations",
        highlights: [
            { label: "Duration", value: "4D/3N" },
            { label: "Altitude", value: "2,240m Peak" },
            { label: "Climate", value: "Cool & Pleasant" },
            { label: "Activities", value: "Nature Walks" }
        ],
        inclusions: [
            "3 nights in premium hill resort",
            "Daily breakfast with mountain views",
            "Toy train ride from Mettupalayam to Ooty",
            "Botanical Garden and Rose Garden entry",
            "Boat ride in Ooty Lake",
            "Visit to tea estates with tasting session"
        ],
        itinerary: "Day 1: Arrival via Toy Train, check-in and evening at Ooty Lake. Day 2: Visit Botanical Garden, Rose Garden, and Doddabetta Peak. Day 3: Day trip to Coonoor - Sim's Park, Lamb's Rock, Dolphin's Nose. Day 4: Visit tea estates, shopping at Ooty market, departure.",
        bestTime: "April to June and September to November are the best months. Summer offers pleasant weather while autumn brings clear skies. Winter (December-February) can be quite cold but beautiful."
    },
    {
        id: 3,
        title: "COASTAL PARADISE",
        tag: "Beach Bliss",
        destination: "Mahabalipuram, Pondicherry",
        duration: "3 Days / 2 Nights",
        accommodation: "Beach resorts",
        meals: "Breakfast & Dinner",
        price: "RS. 9,999 ONLY",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80",
        subtitle: "Sun, sand, and heritage by the Bay of Bengal",
        highlights: [
            { label: "Duration", value: "3D/2N" },
            { label: "Beaches", value: "5+ Pristine" },
            { label: "UNESCO Sites", value: "Shore Temple" },
            { label: "Cuisine", value: "French & Tamil" }
        ],
        inclusions: [
            "2 nights beachfront accommodation",
            "Daily breakfast and dinner",
            "UNESCO World Heritage site tours",
            "Auroville visit with guide",
            "Beach activities - volleyball, frisbee",
            "French Quarter walking tour in Pondicherry"
        ],
        itinerary: "Day 1: Arrive in Mahabalipuram, visit Shore Temple, Five Rathas, Arjuna's Penance. Evening at beach. Day 2: Morning at beach, drive to Pondicherry, explore French Quarter, Auroville visit. Day 3: Promenade Beach, shopping at local markets, departure.",
        bestTime: "November to February is perfect for beach activities with cool weather. March to May can be hot but less crowded. Avoid monsoon season (June-September) due to rough seas."
    },
    {
        id: 4,
        title: "WILDLIFE EXPLORER",
        tag: "Adventure Safari",
        destination: "Mudumalai, Bandipur",
        duration: "3 Days / 2 Nights",
        accommodation: "Forest lodges",
        meals: "All meals included",
        price: "RS. 11,999 ONLY",
        image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80",
        subtitle: "Encounter the wild side of Tamil Nadu",
        highlights: [
            { label: "Duration", value: "3D/2N" },
            { label: "Safaris", value: "4 Game Drives" },
            { label: "Wildlife", value: "Elephants, Tigers" },
            { label: "Birds", value: "200+ Species" }
        ],
        inclusions: [
            "2 nights in jungle lodge",
            "All meals (breakfast, lunch, dinner)",
            "4 safari rides (2 morning, 2 evening)",
            "Experienced naturalist guide",
            "Forest department permits",
            "Bird watching sessions"
        ],
        itinerary: "Day 1: Arrival, settle in lodge, evening safari in Mudumalai. Day 2: Early morning safari, after breakfast visit Theppakadu Elephant Camp, evening safari in Bandipur. Day 3: Final morning safari, nature walk, departure after lunch.",
        bestTime: "October to May is the best period for wildlife viewing. The forest is closed during monsoon (June-September). Winter months (December-February) offer the best chance for tiger sightings."
    },
    {
        id: 5,
        title: "HERITAGE CIRCUIT",
        tag: "Cultural Tour",
        destination: "Kumbakonam, Thanjavur, Trichy",
        duration: "4 Days / 3 Nights",
        accommodation: "Heritage hotels",
        meals: "All meals included",
        price: "RS. 13,999 ONLY",
        image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&q=80",
        subtitle: "Discover the architectural marvels of ancient Tamil Nadu",
        highlights: [
            { label: "Duration", value: "4D/3N" },
            { label: "Temples", value: "15+ Heritage Sites" },
            { label: "Architecture", value: "Dravidian Style" },
            { label: "Culture", value: "Living History" }
        ],
        inclusions: [
            "3 nights in heritage hotels",
            "All meals including traditional cuisine",
            "Expert heritage guide",
            "Entry fees to all monuments",
            "Traditional cultural show",
            "Photography permits"
        ],
        itinerary: "Day 1: Arrival in Kumbakonam, visit Navagraha temples. Day 2: Thanjavur - Brihadeeswarar Temple, Palace. Day 3: Trichy - Rock Fort Temple, Srirangam. Day 4: Local artisan villages, departure.",
        bestTime: "October to March offers pleasant weather for heritage exploration. Avoid peak summer months when temperatures can be extreme."
    },
    {
        id: 5,
        title: "HERITAGE CIRCUIT",
        tag: "Cultural Tour",
        destination: "Kumbakonam, Thanjavur, Trichy",
        duration: "4 Days / 3 Nights",
        accommodation: "Heritage hotels",
        meals: "All meals included",
        price: "RS. 13,999 ONLY",
        image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&q=80",
        subtitle: "Discover the architectural marvels of ancient Tamil Nadu",
        highlights: [
            { label: "Duration", value: "4D/3N" },
            { label: "Temples", value: "15+ Heritage Sites" },
            { label: "Architecture", value: "Dravidian Style" },
            { label: "Culture", value: "Living History" }
        ],
        inclusions: [
            "3 nights in heritage hotels",
            "All meals including traditional cuisine",
            "Expert heritage guide",
            "Entry fees to all monuments",
            "Traditional cultural show",
            "Photography permits"
        ],
        itinerary: "Day 1: Arrival in Kumbakonam, visit Navagraha temples. Day 2: Thanjavur - Brihadeeswarar Temple, Palace. Day 3: Trichy - Rock Fort Temple, Srirangam. Day 4: Local artisan villages, departure.",
        bestTime: "October to March offers pleasant weather for heritage exploration. Avoid peak summer months when temperatures can be extreme."
    },
    {
        id: 5,
        title: "HERITAGE CIRCUIT",
        tag: "Cultural Tour",
        destination: "Kumbakonam, Thanjavur, Trichy",
        duration: "4 Days / 3 Nights",
        accommodation: "Heritage hotels",
        meals: "All meals included",
        price: "RS. 13,999 ONLY",
        image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&q=80",
        subtitle: "Discover the architectural marvels of ancient Tamil Nadu",
        highlights: [
            { label: "Duration", value: "4D/3N" },
            { label: "Temples", value: "15+ Heritage Sites" },
            { label: "Architecture", value: "Dravidian Style" },
            { label: "Culture", value: "Living History" }
        ],
        inclusions: [
            "3 nights in heritage hotels",
            "All meals including traditional cuisine",
            "Expert heritage guide",
            "Entry fees to all monuments",
            "Traditional cultural show",
            "Photography permits"
        ],
        itinerary: "Day 1: Arrival in Kumbakonam, visit Navagraha temples. Day 2: Thanjavur - Brihadeeswarar Temple, Palace. Day 3: Trichy - Rock Fort Temple, Srirangam. Day 4: Local artisan villages, departure.",
        bestTime: "October to March offers pleasant weather for heritage exploration. Avoid peak summer months when temperatures can be extreme."
    },
    {
        id: 5,
        title: "HERITAGE CIRCUIT",
        tag: "Cultural Tour",
        destination: "Kumbakonam, Thanjavur, Trichy",
        duration: "4 Days / 3 Nights",
        accommodation: "Heritage hotels",
        meals: "All meals included",
        price: "RS. 13,999 ONLY",
        image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&q=80",
        subtitle: "Discover the architectural marvels of ancient Tamil Nadu",
        highlights: [
            { label: "Duration", value: "4D/3N" },
            { label: "Temples", value: "15+ Heritage Sites" },
            { label: "Architecture", value: "Dravidian Style" },
            { label: "Culture", value: "Living History" }
        ],
        inclusions: [
            "3 nights in heritage hotels",
            "All meals including traditional cuisine",
            "Expert heritage guide",
            "Entry fees to all monuments",
            "Traditional cultural show",
            "Photography permits"
        ],
        itinerary: "Day 1: Arrival in Kumbakonam, visit Navagraha temples. Day 2: Thanjavur - Brihadeeswarar Temple, Palace. Day 3: Trichy - Rock Fort Temple, Srirangam. Day 4: Local artisan villages, departure.",
        bestTime: "October to March offers pleasant weather for heritage exploration. Avoid peak summer months when temperatures can be extreme."
    },
];

let currentPage = 1;
const perPage = 4;


        function renderPackages() {
    const grid = document.getElementById('packagesGrid');
    grid.innerHTML = "";

    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    const paginatedItems = packages.slice(start, end);

    grid.innerHTML = paginatedItems.map((pkg, index) => `
        <div class="package-card" style="animation-delay: ${index * 0.1}s" onclick="openModal(${pkg.id})">
            <img src="${pkg.image}" alt="${pkg.title}" class="package-image" loading="lazy">
            <div class="diagonal-overlay"></div>
            <div class="logo">
                <img src="./assets/img/common/tn31logo.jpg" alt="TN-31 Logo" />
            </div>
            <div class="package-content">
                <div class="package-tag">${pkg.tag}</div>
                <h2 class="package-title">${pkg.title}</h2>
                <div class="price-tag">${pkg.price}</div>
            </div>
        </div>
    `).join('');
}


        function openModal(id) {
            const pkg = packages.find(p => p.id === id);
            if (!pkg) return;

            document.getElementById('modalImage').src = pkg.image;
            document.getElementById('modalTitle').textContent = pkg.title;
            document.getElementById('modalSubtitle').textContent = pkg.subtitle;
            document.getElementById('modalPrice').textContent = pkg.price;

            // Highlights
            document.getElementById('modalHighlights').innerHTML = pkg.highlights.map(h => `
                <div class="highlight-item">
                    <strong>${h.label}</strong>
                    <span>${h.value}</span>
                </div>
            `).join('');

            // Inclusions
            document.getElementById('modalInclusions').innerHTML = pkg.inclusions.map(i => `
                <li>${i}</li>
            `).join('');

            document.getElementById('modalItinerary').textContent = pkg.itinerary;
            document.getElementById('modalBestTime').textContent = pkg.bestTime;

            document.getElementById('packageModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('packageModal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function bookPackage() {
            alert('Thank you for your interest! Our travel consultant will contact you shortly to complete your booking.');
        }

        // Close modal on outside click
        document.getElementById('packageModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Close modal on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        function nextPage() {
    if (currentPage * perPage < packages.length) {
        currentPage++;
        renderPackages();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderPackages();
    }
}


        // Initialize
        renderPackages();