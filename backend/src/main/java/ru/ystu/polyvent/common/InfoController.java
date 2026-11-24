package ru.ystu.polyvent.common;

import java.util.Map;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InfoController {
    private final String version;

    public InfoController(@Value("${app.version}") String version) {
        this.version = version;
    }

    @GetMapping("/api/info")
    public Map<String, String> info() {
        return Map.of("name", "PolEvent", "version", version);
    }
}
