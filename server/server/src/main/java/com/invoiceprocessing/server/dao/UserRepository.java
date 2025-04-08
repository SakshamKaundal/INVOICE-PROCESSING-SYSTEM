package com.invoiceprocessing.server.dao;

import com.invoiceprocessing.server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
