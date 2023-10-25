function handleDaTa(data) {
    const dataToInsert = data.map((row) =>
        row.map((item) => [
            item.hang,
            item.stt,
            item.name,
            item.clb,
            item.score,
        ])
    );

    // Loại bỏ một cặp [] bên trong mảng con
    const modifiedData = dataToInsert.flatMap((row) => row);
    return modifiedData;
}

module.exports = {
    handleDaTa,
};
