import { Result } from "pg";
import pool from "./dbConfig.js";
import { createTable,
    dropTable,
    renameTable,
    addColumnPhone,
    dropColumnPhone,
    getStructureTableWorkers,
    addConstraintToAge,
    editTypeSalary,
    editNameConstraintNotNull,
    dropConstraintToEmail,
    createTableSalaryInfo,
    dropTableSalaryInfo
 } from "./js/practicWitchDB.js";


await createTable(pool);

await renameTable(pool);

await addColumnPhone(pool);
await getStructureTableWorkers(pool);

await dropColumnPhone(pool);
await getStructureTableWorkers(pool);

await addConstraintToAge(pool);
await editTypeSalary(pool);
await getStructureTableWorkers(pool);

await editNameConstraintNotNull(pool);
await getStructureTableWorkers(pool);

await dropConstraintToEmail(pool);
await getStructureTableWorkers(pool);

await createTableSalaryInfo(pool);


await dropTableSalaryInfo(pool);
await dropTable(pool);

