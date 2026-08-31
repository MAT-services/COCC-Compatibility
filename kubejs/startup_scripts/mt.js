/*// Check https://github.com/Roboter007/ModernTabs for more informations.

// just an example color
const exampleColor = new ModernColor("#36454F");

// use your already registered creative tab (in this example: EXAMPLE_TAB)
ModernTabs.builder("create:create")
        // makes it possible for the defined creative tab to use custom sections
        .withEnabledSections(true)
        // sets only the creative tab background texture color and the scrollbar texture color
        .withCustomBackgroundColor(exampleColor)
        // this method does the same as the withCustomBackgroundColor method, but it also changes the tab icon background color
        .withCustomColor(exampleColor);

// this defines which items are included in which section
// for creating a section you need to define a json file in your assets folder (scroll down a little, if you want to know how create a section)
SectionedItems.addItem(Item.of("create:iron_sheet"), "kubejs:default_section");
*/