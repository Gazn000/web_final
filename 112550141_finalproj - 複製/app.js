new Vue({
    el: '#app',
    data: {
        country: '',
        currencyCode: '',
        exchangeRate: null,
        errorMessage: '',
        TWDvalue: '',
        ExchangedValue: null,
        isInputLegalCountry: false,
        newSearch: '',
        searchHistory: [],
        favorites: []
    },
    methods: {
        fetchWeatherData() {
            if (this.country.trim() !== '') {
                checkWeather(this.country);
            }
        },
        getExchangeRate() {
            this.errorMessage = '';
            this.exchangeRate = null;
            this.currencyCode = this.getCurrencyCode(this.country);
            
            if (!this.currencyCode) {
                this.errorMessage = 'Country not found';
                return;
            }

            const API_URL = `https://api.exchangerate-api.com/v4/latest/${this.currencyCode}`;
            axios.get(API_URL)
                .then(response => {
                    const rates = response.data.rates;
                    if (rates.TWD) {
                        this.exchangeRate = rates.TWD;
                        this.isInputLegalCountry = true;
                        this.addSearch();
                    } else {
                        this.errorMessage = 'Exchange rate to TWD not found';
                        this.isInputLegalCountry = false;
                    }
                })
                .catch(error => {
                    this.errorMessage = 'Error fetching data from API';
                });
        },
        getCurrencyCode(country) {
            const countryCurrencyMap = {
                "Afghanistan": "AFN",
                "New York":"USD",
                "Taipei":"TWD"
                };
            
            return countryCurrencyMap[country];
        },
        getExchangedValue() {
            this.ExchangedValue = this.TWDvalue * this.exchangeRate;
        },
        addSearch() {
            if (this.country.trim() !== '' && !this.searchHistory.includes(this.country)) {
                if (this.searchHistory.length >= 3) {
                    this.searchHistory.shift(); 
                }
                this.searchHistory.push(this.country);
                this.country = ''; 
            }
        },
        searchAgain(search) {
            this.country = search;
            this.getExchangeRate();
        },
        addToFavorites() {
            if (this.country && this.exchangeRate !== null) {
                const favorite = {
                    country: this.country,
                    exchangeRate: this.exchangeRate
                };
                if (!this.favorites.some(f => f.country === favorite.country)) {
                    this.favorites.push(favorite);
                    const query = this.favorites.map(f => `country=${encodeURIComponent(f.country)}&exchangeRate=${f.exchangeRate}`).join('&');
                    window.location.href = `favorites.html?${query}`;
                }
            }
        }
    }
});
