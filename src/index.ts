import { Logger } from "./common";
import { startService } from "./service";

startService().catch((error) => {
    Logger.error({
        message: error instanceof Error ? error.message : "unknown error",
        callSite: { file: __filename },
        exitReason: `failed invoking ${startService.name} function`,
    });
});
