package com.example.BookStore;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@SpringBootTest
public class BookControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void testBookHasFields() throws Exception {
        this.mockMvc.perform(get("/books"))
                .andDo(print())
                .andExpect(jsonPath("$.0.name").exists())
                .andExpect(jsonPath("$.0.author").exists());

    }

}
