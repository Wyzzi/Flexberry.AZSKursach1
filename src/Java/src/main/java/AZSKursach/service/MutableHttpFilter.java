package AZSKursach.service;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MutableHttpFilter implements javax.servlet.Filter {

    @Override
    public void destroy() {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        MutableHttpRequest mutableRequest = new MutableHttpRequest(req);

        // Remove excess header from request.
        mutableRequest.deleteExcessHeader("prefer");

        // Replace substring in request query string.
        mutableRequest.replaceSubstringInQuery("__PrimaryKey", "Primarykey");

        // Replace substring in request body. For POST and DELETE operations.
        mutableRequest.replaceSubstringInBody("__PrimaryKey", "Primarykey");

        HttpServletResponse resp = (HttpServletResponse) response;
        MutableHttpResponse mutableResponse = new MutableHttpResponse(resp);

        chain.doFilter(mutableRequest, mutableResponse);

        // Replace changed parameter name backward for response to frontend.
        mutableResponse.replaceSubstringInResponse("Primarykey", "__PrimaryKey");
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }
}