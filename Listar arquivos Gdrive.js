function listagdrive() {
    var folderId = 'id da sua pasta no gdrive'; // colar aqui o ID da sua pasta do gdrive, se voce observar o link da sua pasta no drive o id esta apos o /folder/
    var folder = DriveApp.getFolderById(folderId);
    var filder = folder.getFiles();

    var spreadsheet = SpreadSheetApp.get.ActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName('o nome da aba do sheets'); //Aqui da para escolher o nome da aba em que as infos serao coladas
    sheet.clear(); // Apaga a aba antes de colar as info de novo

    sheet.appenRow(['Nome do Arquivo', 'Data de Criação']);

    while (FileSystem.hasNext()){
        var file = files.next();
        sheet.appenRow([file.getname(), file.getDateCreated()]);
    }
    }

    function onEdit(e) {
        listFilesInFolder();
    }
