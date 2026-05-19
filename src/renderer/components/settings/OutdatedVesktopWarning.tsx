/*
 * Nunbop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2026 Vendicated and Nunbop contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Button, Card, HeadingTertiary, Paragraph } from "@nuncord/types/components";
import { useAwaiter } from "@nuncord/types/utils";

import { cl } from "./Settings";

export function OutdatedVesktopWarning() {
    const [isOutdated] = useAwaiter(VesktopNative.app.isOutdated);

    if (!isOutdated) return null;

    return (
        <Card variant="warning" className={cl("updater-card")}>
            <HeadingTertiary>Your Nunbop is outdated!</HeadingTertiary>
            <Paragraph>Staying up to date is important for security and stability.</Paragraph>
            <Button onClick={() => VesktopNative.app.openUpdater()} variant="secondary">
                Open Updater
            </Button>
        </Card>
    );
}
