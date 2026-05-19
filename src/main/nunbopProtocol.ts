/*
 * Nunbop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2026 Vendicated and Nunbop contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { app, protocol } from "electron";

import { handleVesktopAssetsProtocol } from "./userAssets";
import { handleNunbopStaticProtocol } from "./nunbopStatic";

app.whenReady().then(() => {
    protocol.handle("nunbop", async req => {
        const url = new URL(req.url);

        switch (url.hostname) {
            case "assets":
                return handleVesktopAssetsProtocol(url.pathname, req);
            case "static":
                return handleNunbopStaticProtocol(url.pathname, req);
            default:
                return new Response(null, { status: 404 });
        }
    });
});
