const target = {};
({ key: target.key } = { key: '1' }); // {key: "1"}
[, ...target.array] = [1, 2, 3]; // target.array = [2, 3]