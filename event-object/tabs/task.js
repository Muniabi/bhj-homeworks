document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.getElementById('tabs1');
    const tabNavigation = tabs.querySelector('.tab__navigation');
    const tabContents = tabs.querySelector('.tab__contents');

    tabNavigation.addEventListener('click', (event) => {
        if (!event.target.classList.contains('tab')) return;

        const selectedTab = event.target;
        const selectedTabIndex = Array.from(tabNavigation.children).indexOf(selectedTab);
        const activeTabContent = tabContents.querySelector('.tab__content.tab__content_active');
        const selectedTabContent = tabContents.children[selectedTabIndex];

        if (!selectedTabContent || selectedTabContent === activeTabContent) return;

        activeTabContent.classList.remove('tab__content_active');

        selectedTabContent.classList.add('tab__content_active');

        const activeTab = tabNavigation.querySelector('.tab.tab_active');
        activeTab.classList.remove('tab_active');

        selectedTab.classList.add('tab_active');
    });
});
