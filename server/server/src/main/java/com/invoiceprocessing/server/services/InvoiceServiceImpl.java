package com.invoiceprocessing.server.services;

import com.invoiceprocessing.server.dao.InvoiceDao;
import com.invoiceprocessing.server.dao.UserRepository;
import com.invoiceprocessing.server.model.Invoice;
import com.invoiceprocessing.server.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvoiceServiceImpl implements InvoiceService {

    @Autowired
    InvoiceDao invoiceDao;

    @Autowired
    UserRepository userRepository;

    @Override
    public Invoice addInvoice(Invoice invoice, String username) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new RuntimeException("User not found");
        }
        invoice.setUser(user);
        invoiceDao.save(invoice);
        return invoice;
    }

    @Override
    public List<Invoice> getInvoices(String username) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new RuntimeException("User not found");
        }
        return invoiceDao.findByUser(user);
    }

    @Override
    public Invoice addInvoice(Invoice invoice) {
        return null;
    }

    @Override
    public List<Invoice> getInvoices() {
        return List.of();
    }

    @Override
    public Invoice deleteInvoice(long id) {
        Invoice invoice = invoiceDao.findById(id).orElseThrow(() -> new RuntimeException("Invoice not found"));
        invoiceDao.delete(invoice);
        return invoice;
    }
}