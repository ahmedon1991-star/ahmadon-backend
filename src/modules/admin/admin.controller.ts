import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('dashboard')
  getDashboard() {
    return this.adminService.getDashboardStats();
  }

  @Get('users')
  getUsers() {
    return this.adminService.getAllUsers();
  }

  @Get('products')
  getProducts() {
    return this.adminService.getAllProducts();
  }

  @Get('orders')
  getOrders() {
    return this.adminService.getAllOrders();
  }
}