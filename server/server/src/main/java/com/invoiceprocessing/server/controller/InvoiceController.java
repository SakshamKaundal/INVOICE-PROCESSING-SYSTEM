package com.invoiceprocessing.server.controller;

import com.invoiceprocessing.server.model.Invoice;
import com.invoiceprocessing.server.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class InvoiceController {

    @Autowired
    InvoiceService invoiceService;

    @PostMapping("/invoice")
    public Invoice addInvoice(@RequestBody Invoice invoice, @RequestParam String username) {
        return this.invoiceService.addInvoice(invoice, username);
    }

    @GetMapping("/invoice")
    public List<Invoice> getInvoices(@RequestParam String username) {
        return this.invoiceService.getInvoices(username);
    }

    @DeleteMapping("/invoice/{invoiceid}")
    public Invoice deleteInvoice(@PathVariable String invoiceid) {
        return this.invoiceService.deleteInvoice(Long.parseLong(invoiceid));
    }
}