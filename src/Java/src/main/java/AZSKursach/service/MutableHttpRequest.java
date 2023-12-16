package AZSKursach.service;

import java.io.*;
import java.util.*;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;

public class MutableHttpRequest extends HttpServletRequestWrapper {
    private String body;
    private List<String> excessHeaders;
    private Map<String,String> replacedQuerySubstrings;

    public MutableHttpRequest(HttpServletRequest request) throws IOException {
        super(request);

        excessHeaders = new ArrayList<String>();
        replacedQuerySubstrings = new HashMap<String,String>();

        CachRequestBody(request);
    }

    @Override
    public ServletInputStream getInputStream() throws IOException {
        final ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(body.getBytes());
        ServletInputStream servletInputStream = new ServletInputStream() {
            public int read() throws IOException {
                return byteArrayInputStream.read();
            }
        };

        return servletInputStream;
    }

    @Override
    public BufferedReader getReader() throws IOException {
        return new BufferedReader(new InputStreamReader(this.getInputStream()));
    }

    @Override
    public Enumeration getHeaders(String name) {
        List values = Collections.list(super.getHeaders(name));

        for (String excessHeader : excessHeaders)
        {
            if(name.equalsIgnoreCase(excessHeader)) {
                values.clear();
            }
        }

        return Collections.enumeration(values);
    }

    @Override
    public String getQueryString() {
        String queryString = super.getQueryString();

        if (queryString == null) {
            return null;
        }

        String modifiedQueryString = queryString;

        for (Map.Entry<String, String> entry : replacedQuerySubstrings.entrySet()) {
            modifiedQueryString = modifiedQueryString.replace(entry.getKey(), entry.getValue());
        }

        return modifiedQueryString;
    }

    public void deleteExcessHeader(String header) {
        excessHeaders.add(header);
    }

    public void replaceSubstringInQuery(String originSubstring, String finalSubstring) {
        replacedQuerySubstrings.put(originSubstring, finalSubstring);
    }

    public void replaceSubstringInBody(String originSubstring, String finalSubstring) {
        body = body.replace(originSubstring, finalSubstring);
    }

    private void CachRequestBody(HttpServletRequest request) throws IOException {
        StringBuilder stringBuilder = new StringBuilder();
        BufferedReader bufferedReader = null;

        try {
            InputStream inputStream = request.getInputStream();
            if (inputStream != null) {
                bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
                char[] charBuffer = new char[128];

                int bytesRead = -1;
                while ((bytesRead = bufferedReader.read(charBuffer)) > 0) {
                    String originalString = new String(charBuffer);
                    charBuffer = originalString.toCharArray();

                    stringBuilder.append(charBuffer, 0, bytesRead);
                }
            } else {
                stringBuilder.append("");
            }
        } catch (IOException ex) {
            throw ex;
        } finally {
            if (bufferedReader != null) {
                try {
                    bufferedReader.close();
                } catch (IOException ex) {
                    throw ex;
                }
            }
        }

        body = stringBuilder.toString();
    }
}
