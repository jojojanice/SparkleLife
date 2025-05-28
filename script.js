function stackBurgers(countryId, count) {
    const stack = document.getElementById(countryId);
    stack.innerHTML = ''; // 清空現有漢堡
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const burger = document.createElement('div');
            burger.className = 'burger';
            burger.textContent = '🍔';
            stack.appendChild(burger);
        }, i * 300); // 每個漢堡間隔 300ms 出現
    }
}
