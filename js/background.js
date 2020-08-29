chrome.contextMenus.create({
  title: '在蔡高中學圖書館中查找：%s', 
  contexts: ['selection'], 
  onclick: function(params)
  {
      chrome.tabs.create({url: 'https://sv3.choikou.edu.mo/skheck/opac/?page=opacSearch&q=' + encodeURI(params.selectionText)});
  }
});