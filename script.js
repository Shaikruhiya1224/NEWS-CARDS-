const articles = [
    {
        category: "TECHNOLOGY",
        title: "Artificial Intelligence Future",
        description: "New AI technologies are creating opportunities in education, business and healthcare.",
        date: "November 06, 2026",
        image: "https://picsum.photos/600/400?random=11"
    },

    {
        category: "SPORTS",
        title: "Latest Cricket Updates",
        description: "Cricket lovers are waiting for exciting international matches and tournaments.",
        date: "November 05, 2026",
        image: "https://picsum.photos/600/400?random=12"
    },

    {
        category: "BUSINESS",
        title: "Global Economy News",
        description: "Businesses are exploring new opportunities in the international market.",
        date: "November 04, 2026",
        image: "https://picsum.photos/600/400?random=13"
    },

    {
        category: "EDUCATION",
        title: "Modern Education System",
        description: "Digital learning platforms are changing the way students learn.",
        date: "November 03, 2026",
        image: "https://picsum.photos/600/400?random=14"
    },

    {
        category: "HEALTH",
        title: "Tips For Healthy Living",
        description: "Healthy food and daily exercise are important for a better lifestyle.",
        date: "November 02, 2026",
        image: "https://picsum.photos/600/400?random=15"
    },

    {
        category: "WORLD",
        title: "World Latest News",
        description: "Read important international developments and global updates.",
        date: "November 01, 2026",
        image: "https://picsum.photos/600/400?random=16"
    }
];

const newsList = document.getElementById("newsList");

function displayArticles() {

    newsList.innerHTML = "";

    articles.forEach(function(article, index) {

        const card = document.createElement("div");

        card.className = "news-card";

        card.innerHTML = `
            <img src="${article.image}" alt="News Image">

            <div class="card-info">

                <small>${article.category}</small>

                <h3>${article.title}</h3>

                <p>${article.description}</p>

                <p style="margin-top:12px">
                    📅 ${article.date}
                </p>

                <button onclick="openArticle(${index})">
                    Read More →
                </button>

            </div>
        `;

        newsList.appendChild(card);
    });
}

function openArticle(index) {

    const article = articles[index];

    alert(
        article.title + "\n\n" +
        article.description + "\n\n" +
        "Category: " + article.category
    );
}

displayArticles();