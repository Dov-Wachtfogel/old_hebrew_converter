
function startEncryption() {
    originalMessage = document.getElementById("original").value;
    let encryptedMessage = "";

    for (letter of originalMessage) {
        encryptedMessage += convertLetter(letter);
    }

    console.log(encryptedMessage);
    document.getElementById("encrypted").value = encryptedMessage;
}
function convertLetter(l){
    let l_dict = {"א":"𐤀", "ב":"𐤁", "ג":"𐤂", "ד":"𐤃", "ה":"𐤄", "ו":"𐤅", "ז":"𐤆", "ח":"𐤇", "ט":"𐤈", "י":"𐤉", "כ":"𐤊", "ל":"𐤋",
        "מ":"𐤌",
        "נ":"𐤍",
        "ס":"𐤎",
        "ע":"𐤏",
        "פ":"𐤐",
        "צ":"𐤑",
        "ק":"𐤒",
        "ר":"𐤓",
        "ש":"𐤔",
        "ת":"𐤕",
        "𐤀":"א",
        "𐤁":"ב",
        "𐤂":"ג",
        "𐤃":"ד",
        "𐤄":"ה",
        "𐤅":"ו",
        "𐤆":"ז",
        "𐤇":"ח",
        "𐤈":"ט",
        "𐤉":"י",
        "𐤊":"כ",
        "𐤋":"ל",
        "𐤌":"מ",
        "𐤍":"נ",
        "𐤎":"ס",
        "𐤏":"ע",
        "𐤐":"פ",
        "𐤑":"צ",
        "𐤒":"ק",
        "𐤓":"ר",
        "𐤔":"ש",
        "𐤕":"ת"
    };
    try {
        l = l_dict[l];
    }
    catch {
        console.log('no hebrew')
    }
    return l
}
