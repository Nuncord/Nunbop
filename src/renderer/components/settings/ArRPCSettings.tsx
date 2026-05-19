/*
 * Nunbop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2026 Vendicated and Nunbop contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Button } from "@nuncord/types/components";

import { SettingsComponent } from "./Settings";

export const ArRPCSettingsButton: SettingsComponent = () => {
    return <Button onClick={() => VesktopNative.arrpc.openSettings()}>Configure Rich Presence</Button>;
};
