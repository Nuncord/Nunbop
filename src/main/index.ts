/*
 * Vesktop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2023 Vendicated and Vencord contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { CommandLine } from "./cli";

if (CommandLine.values.repair) {
    (async () => {
        const { State } = await import("./settings");
        if (State.store.nuncordDir) {
            console.error("Cannot repair: using custom Nuncord directory.");
            process.exit(1);
        }
        console.log("Repairing Nuncord...");
        const { downloadVencordAsar } = await import("./utils/vencordLoader");
        await downloadVencordAsar();
        console.log("Repair complete.");
        process.exit(0);
    })();
} else {
    require("./startup");
}
