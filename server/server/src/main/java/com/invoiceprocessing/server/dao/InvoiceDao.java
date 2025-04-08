package com.invoiceprocessing.server.dao;

import com.invoiceprocessing.server.model.Invoice;
import com.invoiceprocessing.server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InvoiceDao extends JpaRepository<Invoice, Long> {
    List<Invoice> findByUser(User user);
}
